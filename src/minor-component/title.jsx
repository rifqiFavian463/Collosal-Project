import PropTypes from "prop-types";

export default function CollosalTitle({title, subTitle}) {
  return (
    <div className="text-center">
        <small className="text-base uppercase collosal-tagline mb-6">{subTitle}</small>
        <h2 className="text-3xl w-2/6 m-auto font-bold">{title}</h2>
    </div>
  )
}


CollosalTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

CollosalTitle.defaultProps = {
    subTitle: 'Sub Title',
    title: 'Title',
}
