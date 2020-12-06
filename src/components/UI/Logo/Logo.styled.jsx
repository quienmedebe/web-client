import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .Image {
    width: 10rem;
    margin-top: 4rem;
  }

  .Title {
    text-align: center;
    font-size: 1.8rem;
    margin: 0;
    text-transform: uppercase;
  }

  .Subtitle {
    max-width: 25rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2rem;
  }
`;
