import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TagChip from './TagChip.jsx'
import './WorkCard.css'

export default function WorkCard({
  number,
  tags,
  title,
  category,
  description,
  impact,
  bgColor,
  image,
  route,
  comingSoon,
  stamp,
}) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (comingSoon) {
      alert('Case study coming soon!')
      return
    }
    if (route && route !== '#') navigate(route)
  }

  return (
    <article
      className={`work-card ${hovered ? 'work-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {stamp && (
        <div className="work-card__stamp">
          <span className="work-card__stamp-emoji">{stamp.emoji}</span>
          <span className="work-card__stamp-label">{stamp.label}</span>
        </div>
      )}
      {/* Image area */}
      <div
        className="work-card__image"
        style={{ background: bgColor }}
        onClick={handleClick}
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="work-card__image-photo"
          />
        )}
        <div className="work-card__image-overlay" />
        <div className="work-card__image-hover-cta">
          {comingSoon ? 'Coming soon' : 'Read full case study →'}
        </div>
        {!image && (
          <div className="work-card__image-placeholder">
            <div className="work-card__image-icon">⬜</div>
            <span>Image Coming Soon</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="work-card__content">
        <div className="work-card__meta-row">
          <span className="work-card__number">{number}</span>
          <div className="work-card__tags">
            {tags.map((t) => (
              <TagChip key={t} label={t} />
            ))}
          </div>
        </div>

        <h3 className="work-card__title">{title}</h3>
        <p className="work-card__category">{category}</p>
        <p className="work-card__description">{description}</p>

        <div className="work-card__impact">
          <span className="work-card__impact-label">IMPACT</span>
          <ul>
            {impact.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <a
          href={route}
          className={`work-card__cta ${comingSoon ? 'work-card__cta--disabled' : ''}`}
          onClick={handleClick}
        >
          {comingSoon ? 'Coming soon' : 'Read full case study →'}
        </a>
      </div>
    </article>
  )
}
