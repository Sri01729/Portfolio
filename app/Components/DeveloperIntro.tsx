import { TypeAnimation } from 'react-type-animation';

const DeveloperIntro = () => {
  return (
    <TypeAnimation
      sequence={[
        'Developer',
        300,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block', color: '#969696' }}
      className="hover:text-[#fefeff] transition-colors"
    />
  );
};

export default DeveloperIntro;