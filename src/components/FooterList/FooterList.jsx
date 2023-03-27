import React from 'react'
import styles from '../../styles/FooterList/FooterList.module.scss'

const listData = [
  {
    title: 'Products',
    items: ['Shoes'],
  },
  {
    title: 'Category',
    items: ['Men', 'New In', 'Weekly Pick'],
  },
  {
    title: 'Company Info',
    items: [
      'About Us',
      'Contact Us',
      'Payment Options',
      'Track Order',
      'Support',
      'Vouchers',
      'Size Charts',
    ],
  },
  {
    title: 'Follow Us',
    items: [],
  },
]

const FooterList = () => {
  return (
    <div className={styles.sectionfooter}>
      {listData.map((list, index) => (
        <ol key={index}>
          <li>{list.title}</li>
          {list.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ))}
    </div>
  )
}

export default FooterList

/* import React from 'react'
import styles from '../../styles/FooterList/FooterList.module.scss'

const FooterList = () => {
  return (
    <div className={styles.sectionfooter}>
      <ol>
        <li>Products</li>
        <li>Shoes</li>
      </ol>
      <ol>
        <li>Category</li>
        <li>Men</li>
        <li>New In</li>
        <li>Weekly Pick</li>
      </ol>
      <ol>
        <li>Company Info</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Payment Options</li>
        <li>Track Order</li>
        <li>Support</li>
        <li>Vouchers</li>
        <li>Size Charts</li>
      </ol>
      <ol>
        <li>Follow Us</li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  )
}

export default FooterList */
