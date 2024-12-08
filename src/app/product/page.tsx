import Image from "next/image"
import Car3 from "../data/car3.png"
import Car4 from  "../data/car 4.png"
import Car5 from  "../data/car 5.png"
import Car6 from  "../data/car 6.png"
import Car7 from  "../data/car 7.png"
import Car8 from  "../data/car 8.png"
import Car9 from  "../data/car 9.png"
import Car10 from  "../data/car 10.png"
import Car11 from  "../data/car 11.png"
import Car12 from  "../data/car 12.png"
import Car13 from  "../data/car 13.png"

export default function ProductList(){
  return(
    <div className="product">
      <h1 className="popular">
        Popular Cars
      </h1>
      <h1 className="veiw">
        View All 
      </h1>
      <div className="child-container">
     <div className="Car-3">
      <h1 className="koen">
        Koenigsegg
      </h1>
      <h1 className="sport">Sport</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car3} alt="car" />
     </div>
     <h1 className="heading2">
      $99.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
        Nissan GT -R
      </h1>
      <h1 className="sport">Sport</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car4} alt="car" />
     </div>
     <h1 className="heading2">
      $80.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
        Rolls - Royce
      </h1>
      <h1 className="sport">Sedan</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car3} alt="car" />
     </div>
     <h1 className="heading2">
      $96.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
      Nissan GT -R
      </h1>
      <h1 className="sport">Sport</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car5} alt="car" />
     </div>
     <h1 className="heading2">
      $80.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
        AllNewRush
      </h1>
      <h1 className="sport">Suv</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car6} alt="car" />
     </div>
     <h1 className="heading2">
      $72.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
        CR - V
      </h1>
      <h1 className="sport">Suv</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car7} alt="car" />
     </div>
     <h1 className="heading2">
      $80.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
      NewAllTerios
      </h1>
      <h1 className="sport">SUV</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car8} alt="car" />
     </div>
     <h1 className="heading2">
      $74.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
      CR - V      
      </h1>
      <h1 className="sport">SUV</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car9} alt="car" />
     </div>
     <h1 className="heading2">
      $80.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
      MGZX Exclusice
      </h1>
      <h1 className="sport">Hatchback</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car10} alt="car" />
     </div>
     <h1 className="heading2">
      $76.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
      NewMGZS
      </h1>
      <h1 className="sport">SUV</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car11} alt="car" />
     </div>
     <h1 className="heading2">
      $80.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
     MGZSExcite
      </h1>
      <h1 className="sport">Hatchback</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car12} alt="car" />
     </div>
     <h1 className="heading2">
      $74.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     <div className="Car-3">
      <h1 className="koen">
       New MGZS 
      </h1>
      <h1 className="sport">SUV</h1>
     <div className="car-image w-[250px]" >
     <Image src={Car13} alt="car" />
     </div>
     <h1 className="heading2">
      $80.00/day
     </h1>
     <button className="rent-now">Rent Now</button>
     </div>
     </div>
    <button className="show-more">Show more car</button>
    </div>
  )
}