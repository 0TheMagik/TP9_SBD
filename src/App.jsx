import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Data for the cards as provided in the assignment
  const response = {
    page: 1,
    results: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        image: "https://picsum.photos/500",
      },
    ],
  };

  // State for counter example
  const [count, setCount] = useState(0);

  // UseEffect to show alert when count is divisible by 10
  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Count is now ${count}, which is divisible by 10!`);
    }
  }, [count]);

  // Navigation bar component
  const Navbar = () => {
    return (
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <div className="text-xl font-bold">Izzan Nawa Syarif</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#" className="hover:text-blue-200">Profile</a>
          <a href="#" className="hover:text-blue-200">Contact</a>
        </div>
      </nav>
    );
  };

  // Card component
  const Card = ({ title, body, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-700">{body.substring(0, 100)}...</p>
        </div>
      </div>
    );
  };

  // Counter component with useState and useEffect demonstration
  const Counter = () => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Counter Demo</h2>
        <div className="text-6xl font-bold text-center mb-6">{count}</div>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            +
          </button>
          <button 
            onClick={() => setCount(count - 1)}
            className="px-6 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
          >
            -
          </button>
          <button 
            onClick={() => setCount(0)}
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          An alert will appear when count is divisible by 10
        </p>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      
      <div className="container mx-auto p-4">
        
        <Counter />
        
        <h2 className="text-2xl font-bold mb-4">Article Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {response.results.map((item) => (
            <Card 
              key={item.id}
              title={item.title}
              body={item.body}
              image={`${item.image}?random=${item.id}`} // Adding random parameter to get different images
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App