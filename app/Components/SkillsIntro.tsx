import { TypeAnimation } from 'react-type-animation';

const SkillsIntro = () => {
  return (
    <TypeAnimation
      sequence={[
        'React',
        2000,
        'Next.js',
        2000,
        'Express/Node.js',
        2000,
        'SQL/NoSQL',
        2000,
        'Spring Boot',
        2000,
        'Python',
        2000,
        'Wordpress',
        2000,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', display: 'inline-block', color: '#6e6e6e'}}
    />
  );
};

export default SkillsIntro;