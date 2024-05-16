import './todoLoading.css'
function TodoLoading() {
    return (
    <>
        <p>Estamos Cargando...</p>
        <ul className="listLoading">
            <li className="itemLoading"><span className='iconLoading'></span></li>
            <li className="itemLoading"><span className='iconLoading'></span></li>
            <li className="itemLoading"><span className='iconLoading'></span></li>
        </ul>
    </>
    )}
export {TodoLoading}