import './DestinationsStyles.css'

import Borabora from '../../assets/borabora.jpg'
import Borabora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Keywest from '../../assets/keywest.jpg'

const Destinations = () => {
  return (
    <div className='destinations'>
        <div className='container'>
          <h1>All Inclusive Resortes</h1>
          <p>On the Carribean's best BEACHES</p>
          <div className="img-container">
            <img className="span-3 image-grid-row-2" src={Borabora} alt="borabora" />
            <img src={Borabora2} alt="borabora2" />
            <img src={Maldives} alt="maldives" />
            <img src={Maldives2} alt="maldives2" />
            <img src={Keywest} alt="keywest" />
          </div>
        </div>
    </div>
  )
}

export default Destinations