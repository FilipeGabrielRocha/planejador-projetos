import './LoadingModule.css'

import loading from '../../../img/loading.svg'

export default function Loading(){
    return (
        <div className='loader_container'>
            <img className='loader' src={loading} alt='Carregamento' />
        </div>
    )
}