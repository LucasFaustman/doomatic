import { useSelector } from 'react-redux'
import Header from '../components/Header'


export default function Reports() {
    const count = useSelector((state) => state.value)
    return (
        <div>
            <Header headerLink={'/'}/>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h2>Your Reports</h2>
                <div>
                    <h4>Lifetime Tasks Completed: {count}</h4>
                </div>
            </div>
        </div>
    )
}