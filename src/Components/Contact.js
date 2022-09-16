import './style.css';

const Contact = ({people}) => {
        
    return ( 

        (people.map((person)=>{ 

        const {age,id,name,image} = person;

            return( 
        <div className="item-list" key={id}>
            <div className="column">
                <div className="left">
                    <img className="image" src={image} alt="" />
                </div>
                <div className="right">
                    <h1 className="name">{name}</h1>
                    <p className="age">{age} years</p>
                </div>
            </div>
        </div>
            );
        }))
     );
}
 
export default Contact;