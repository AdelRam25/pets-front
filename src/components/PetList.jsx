import { useEffect, useState } from "react"
import PetCard from "./petCard"
import axios from "axios"

const petsPage = () => {
    const [pets , setPets] = useState([]);
   
  
    useEffect(() => {
      const fetchPets = async () => {
  
          const response = await axios.get("http://localhost:3000/pets");
          setPets(response.data);
  
  
      };
  
      fetchPets();
    }, []);
  
    return (
      <div>
        <div className="max-w-screen-md mx-auto mt-16">
  
  
          <div className={"grid grid-cols-4 gap-10  p-9"}>
            {pets.map(pet => (
              <PetCard key={pet._id} pets={pets} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default petsPage;