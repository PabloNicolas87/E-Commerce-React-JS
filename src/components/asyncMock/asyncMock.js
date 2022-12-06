// Mock
const items = [
    {
      id: '1',
      title: 'Iphone 14 Pro Max',
      description: 'A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.',
      price:'999',
      category: 'celular',
      stock: 10,
      pictureUrl: '/images/iphone14.jpg',
    },
    {
      id: '2',
      title: 'Ipad Pro',
      description: 'Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS 16. The ultimate iPad experience.',
      price:'799',
      category: 'tablet',
      stock: 30,
      pictureUrl: '/images/ipadpro.jpg',
    },
    {
      id: '3',
      title: 'MacBook Pro 13”',
      description: 'The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics, it’s our most portable pro laptop.',
      price:'1299',
      category: 'notebook',
      stock: 13,
      pictureUrl: '/images/macbookpro.jpg',
    },
    {
      id: '4',
      title: 'Inspiron 15 3000',
      description: 'Experience a more responsive yet quieter performance, featuring the latest AMD processors with PCIe SSD options. Benefit from roomy keycaps and a spacious touchpad that makes it easier to navigate your content. ComfortView software, which is a TUV Rheinland certified solution, reduces harmful blue light emissions to keep your eyes comfortable over extended viewing times. Work ergonomically with a lift hinge for a more comfortable typing angle while sleek three-sided narrow borders provide an immersive viewing experience.',
      price:'800',
      category: 'notebook',
      stock: 20,
      pictureUrl: './images/notebookdellinspironseries3501.jpg',
    },
    {
      id: '5',
      title: 'Samsung Galaxy S22',
      description: 'It’s our brightest innovation yet. The sensor pulls in more light, the Super Clear Glass dials down lens flare, and fast-acting AI delivers near-instant intelligent processing.',
      price:'799',
      category: 'celular',
      stock: 25,
      pictureUrl: '/images/samsungs22.jpg',
    },
    {
      id: '6',
      title: 'Samsung Galaxy Tab S7',
      description: 'Introducing the first ever 5G-enabled tablet in the US, the Galaxy S7+ and S71. The razor-sharp display, long-lasting battery2 and expandable memory3 are just the beginning. Add the redesigned S pen, which comes included, and the optional keyboard4 and you have got a tablet that lets you play harder and work smarter. ',
      price:'350',
      category: 'tablet',
      stock: 17,
      pictureUrl: '/images/galaxytabs7.jpg',
    },
  ]
  
  export const getItems = () => {
    return new Promise ((resolve) => {
      setTimeout (() => {
        resolve(items)
      }, 2000)  
    }) 
  }

  export const getItemsById = (id) => {
    return new Promise ((resolve) => {
      setTimeout (() => {
        resolve(items.find(items => items.id === id))
      }, 2000)  
    }) 
  }

  export const getItemsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
      setTimeout (() => {
        resolve(items.filter(items => items.category === categoryId))
      }, 2000)  
    }) 
  }