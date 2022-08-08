import './Base.css';

function Base({ children }){
    return  (
      <div className="principal">
        <div>{children}</div>
      </div>
    );
}

export default Base;