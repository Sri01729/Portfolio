import { TypeAnimation } from 'react-type-animation';

const DeveloperIntro = () => {
  return (
    <TypeAnimation
      sequence={[
        'Developer',
        300,
        () => {
          // console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block', color: 'rgb(14 165 233'}}
    />
  );
};

export default DeveloperIntro;