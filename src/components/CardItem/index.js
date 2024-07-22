import './index.css'
const imagesList = [
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721632735/Photo_by_Peter_Idowu_k2g5iq.png',
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721632498/Photo_by_Matteo_Minoglio_i3k1df.png',
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721633107/Photo_by_Chris_Zhang_ofge2i.png',
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721633186/Photo_by_Hayes_Potter_ntod9n.png',
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721633324/Photo_by_Amin_RK_xvylzc.png',
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721633438/Photo_by_Brooke_Cagle_bvl8op.png',
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721633575/Photo_by_Franco_Figueroa_ppnah4.png',
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721633704/Photo_by_Joe_Gardner_2_wo0u8r.png',
  'https://res.cloudinary.com/dqdx0yz2t/image/upload/v1721633775/Photo_by_Daniil_Lobachev_ssefy8.png',
]
const CardItem = props => {
  const {eachItem} = props
  const {id, name, email} = eachItem

  return (
    <li>
      <img src={imagesList[id - 1]} />
      <h1 className='name'>{name}</h1>
      <p className='email'>{email}</p>
    </li>
  )
}

export default CardItem
