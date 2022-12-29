import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { collection, addDoc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const { cart, getTotal, removeCartPostVenta } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const valorInicial = {
        name: '',
        email: '',
        phone: '',
    }

    const [user, setUser] = useState(valorInicial)

    const capturarInputs = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const handleCreateOrder = async(e) => {
        e.preventDefault();
        setUser({...valorInicial})

        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                },
                items: cart,
                total: getTotal()
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(item => item.id)
    
            const itemsRef = query(collection(db, 'items'), where(documentId(), 'in', ids))
            const itemsFirestore = await getDocs(itemsRef)
    
            const { docs } = itemsFirestore
    
            const sinStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const itemsOnCart = cart.find(prod => prod.id === doc.id)
                const prodQuant = itemsOnCart?.quantity
    
                if(stockDb >= prodQuant) {
                    batch.update(doc.ref, { stock: stockDb - prodQuant })
                } else {
                    sinStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(sinStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const addOrder = await addDoc(orderRef, objOrder)
    
                removeCartPostVenta()

                setTimeout(() => {
                    navigate('/')
                }, 500)

                console.log(addOrder.id)
            } else {
                alert('Hay productos que no tienen stock')
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    } 
       

    if(loading) {
        return <h2 className="d-flex justify-content-center">Aguarde un momento! Su orden se está generando...</h2>
    }

    return (
        <div className="d-flex align-items-center flex-column">
            <h2 className="py-3">Checkout</h2>
            <form className="card p-5" onSubmit={handleCreateOrder}>
                <div className="form-group d-flex flex-column justify-content-center align-items-center">
                    <input className="my-3 py-1" type="text" name="name" placeholder="Ingrese su nombre" onChange={capturarInputs} value={user.name} ></input>
                    <input className="my-3 py-1" type="email" name="email" placeholder="Ingrese su email" onChange={capturarInputs} value={user.email}></input>
                    <input className="my-3 py-1" type="number" name="phone" placeholder="Ingrese su telefono" onChange={capturarInputs} value={user.phone}></input>
                </div>
                <button className="botonPrimary my-3 mx-auto">Confirmar Orden</button>
            </form>
        </div>
    )
}

export default Checkout