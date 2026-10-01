export default function Book(props) {
 const{rating, bname, price, quantity,picUrl} = props.book;
 const qtystyle={
  fontSize:"1rem",
  color:"blue",
  textAlign:"center",
  backgroundColor:"lightgray",
  padding:"0.5rem",
 };
 return (
    <div className="book">
      <img 
      src ={picUrl}
      alt ={bname}
      />
      
    <h1>{bname}</h1>
    <h2>Price: {price}</h2>
    <h3 style={qtystyle}>Quantity: {quantity}</h3>
    <h4 style={{color:'blue', textAlign:'center'}}>Rating: {rating}</h4>
    <button style={{textAlign:'center'}}>Buy Now</button>
    </div>
  );
}