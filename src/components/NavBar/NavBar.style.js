import styled from 'styled-components';

export const NavBarStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  position: relative;

  @media (max-width: 767px) {
    display: flex;
  }

  &.navbar-sticky {
    background: #000c2c;
    position: fixed;
    left: 0;
    box-shadow: 0px 1px 3px #222;
    animation: moveDown 0.5s ease-in-out;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: block;
  }

  .logo-sticky {
    animation: moveDown 0.9s ease-in-out;
    position: relative;
    left: 8rem;
  }

  @keyframes moveDown {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }

  .brand {
    color: #fff;
    display: flex;
    align-items: center;

    .brand-text {
      margin-left: 10px;
      color: #22dd85;
      font-size: 1.8rem;
    }
  }

  .nav_items {
    display: flex;
    justify-content: space-between;
    width: 85%;
    padding: 0;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: -500px;
      width: 100%;
      background: #000c2cf7;
      border-radius: 5px;
      z-index: 2000000;
      left: 0;
      /* display: none; */
      transition: top 300ms ease-in;
      padding: 2rem 0;
    }

    &.show {
      left: 0;
      top: 60px;
    }

    .nav_item {
      list-style: none;

      @media (max-width: 767px) {
        margin: 1.4rem 0;
      }

      .link {
        font-size: 1.7rem;
        font-weight: 500;
        color: #fff;
        cursor: pointer;

        .active {
          border-bottom: 1px solid #333;
        }

        &.active {
          border-bottom: 1px solid #333;
        }
      }
    }
  }

  /* Menu Icon */

  .menu-btn {
    position: relative;
    justify-content: center;
    align-items: center;
    width: 40px;
    /* height: 40px; */
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    /* border: 3px solid #fff; */
    display: none;

    @media (max-width: 767px) {
      //CSS
      display: flex;
    }
  }
  .menu-btn__burger {
    width: 30px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-10px);
  }
  .menu-btn__burger::after {
    transform: translateY(10px);
  }

  /* ANIMATION */
  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;

    @media (max-width: 767px) {
      //CSS
      /* display: flex; */
    }
  }
  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  &.pad {
    padding: 0 2rem;
    width: 100%;
  }
`;

export const Cont = styled.div`
  padding: 0 2rem;
  width: 100%;
`;
