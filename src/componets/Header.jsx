import React from 'react';

export default function Header() {
  return (
    <>
      <nav className=" purple accent-2">
        <div className="nav-wrapper">
          <a href="!#"> React Shop</a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/blademan/react-movies">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
