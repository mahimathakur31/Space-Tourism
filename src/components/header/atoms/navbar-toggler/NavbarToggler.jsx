// import React from 'react';
// // import Close from '../../../../assets/shared/icon-close.ico';
// // import Hamburger from '../../../../assets/shared/icon-hamburger.ico';
// import './NavbarToggler.scoped.scss';

// const NavToggler = ({ isNavBarOpen, clickHandler }) => {
//   return (
//     <img
//       className={`nav-toggler ${isNavBarOpen ? 'nav-toggler--close' : ''}`}
//       onClick={clickHandler}
//       // src={isNavBarOpen ? Close : Hamburger}
//       // alt='Navigation bar toggler'
//     />
//   );
// };

// NavToggler.displayName = 'NavbarToggler';
// export default React.memo(NavToggler);

// New header from llm 

import React from 'react';
// import Close from '../../../../assets/shared/icon-close.ico';
// import Hamburger from '../../../../assets/shared/icon-hamburger.ico';
import './NavbarToggler.scoped.scss';

const NavToggler = ({ isNavBarOpen, clickHandler }) => {
  return (
    <img
      className={`nav-toggler ${isNavBarOpen ? 'nav-toggler--close' : ''}`}
      onClick={clickHandler}
      src="#" // temporary placeholder, update with your actual icons if needed
      alt="Navigation toggler" // THIS fixes the build error
    />
  );
};

NavToggler.displayName = 'NavbarToggler';
export default React.memo(NavToggler);