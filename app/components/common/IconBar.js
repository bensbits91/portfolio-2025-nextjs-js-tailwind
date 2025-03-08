import Icon from './Icon';

const IconBar = ({ icons, centered }) => (
   <div className={`flex items-center ${centered && 'justify-center'}`}>
      {icons.map((icon, index) => (
         <Icon key={index} src={icon.src} altText={icon.altText} />
      ))}
   </div>
);

export default IconBar;
