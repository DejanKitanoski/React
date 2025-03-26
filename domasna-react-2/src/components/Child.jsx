import Grandchild from "./Grandchild"; 

const Child = ({ name, age, grandchildren }) => {
    return (
        <div className="child">
            <h1>{name} Age: {age}</h1>
            <div className="grandchildren">
                {grandchildren.map((grandchild, index) => (
                    <Grandchild key={index} name={grandchild.name} hobby={grandchild.hobby} />
                ))}
            </div>
        </div>
    );
};

export default Child;
