import React from 'react'
import Timezone from './timezone'

const Footer = (props) => (
  <>
    <ul className="footer-list">
      <li>Share:</li>
      <li>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fshouldideployion.today%2F&t=Should%20I%20Deploy%20Ion%20Today%3F"
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
        >
          Facebook
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fshouldideployion.today%2F&text=Should%20I%20Deploy%20Ion%20Today%3F:%20http%3A%2F%2Fshouldideployion.today"
          target="_blank"
          rel="noopener noreferrer"
          title="Tweet"
        >
          Twitter
        </a>
      </li>
      <li>
        Source:{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://github.com/caique39/shouldideployion/"
        >
          Github
        </a>
      </li>
      <li>
        Timezone:{' '}
        <Timezone onChange={props.changeTimeZone} timezone={props.timezone} />
      </li>
    </ul>
  </>
)

export default Footer
