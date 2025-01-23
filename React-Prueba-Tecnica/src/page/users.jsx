import { useEffect, useState } from "react";

export const Users = () => {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    setloading(true)
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(`Error peticion ${err}`))
      .finally(()=>setloading(false));
  }, []);

  if (loading) {
    return <p className="flex-loading">Cargando...</p>; 
  }

  if (!data) {
    return <p className="flex-loading">No hay datos disponibles.</p>; 
  }

  return (
    <table>
      <caption>PRUEBA TÉCNICA</caption>

      <thead>
        <tr>
          <th>Member</th>
          <th>Role</th>
          <th>Projects Availability</th>
        </tr>
      </thead>

      <tbody>
        {data.map((element, index)=>(
            <tr key={index}>
          <td className="flex-container">
            <img src={element.image} alt="" />
            <p>{element.name}</p>
          </td>
          <td className="role">{element.role} </td>
          <td>
            <ul className="list">
                {element.projects.map((projects, indexproject)=>(
              <li key={indexproject}>{projects}</li>      
          
            ))}
            </ul>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  );
};
