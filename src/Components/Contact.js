import './style.css';

const Contact = () => {
    return ( 
        <div className="item-list">
            <div className="column">
                <div className="left">
                    <img className='image' src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg" alt="" />
                </div>
                <div className="right">
                    <h1 className="name">Name</h1>
                    <p className="age">23 years</p>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;