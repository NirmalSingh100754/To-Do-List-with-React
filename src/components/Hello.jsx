function Hello({person}) {
//   console.log(props);
    // const{name,message}=props; // destructuring in js
  return (
    <div>
      <h1>
       {person.name} {person.message} {person.emoji}; 
      </h1>
    </div>
  );
}
// jsx => javascript extension help us to combine javascript with HTML
export default Hello;
//the data in props are immutable which means it cannot be modified