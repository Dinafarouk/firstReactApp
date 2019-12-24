import { Component } from "react";

const Ninjas = ({ ninjas }) => {



  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    ) : null;
  })
  // Console.log(this.props);

  return (
    <div className="ninja-list">
      {/* {ninjaList} */}
    </div>
  )

}

export default Ninjas


  //  const  ninjaList  = ninjas.map(ninja => {
  //    if (ninja.age > 20){

  //    return (
  //        <div className="ninja" key={ninja.id}>
  //             <div>Name: { ninja.name }</div>
  //             <div>Age: { ninja.age }</div>
  //             <div>Belt: { ninja.belt }</div>
  //          </div> 
  //    )
  //   } else {
  //     return null
  //   }
  //  })