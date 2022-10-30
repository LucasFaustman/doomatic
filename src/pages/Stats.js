import { useSelector } from 'react-redux'
import Header from '../components/Header'


export default function Stats() {
    const count = useSelector((state) => state.value)
    return (
        <div>
        <Header headerLink={'/'}/>
        <h3>Hello {count}</h3>
        </div>
    )
}