import PropTypes from "prop-types";

export default function Page({ children, cool }) {
  return (
    <div>
      Page Component
      {children}
    </div>
  );
}

// export default Page
Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
