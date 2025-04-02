import Icon from './Icon';

const IconBar = ({ icons, centered = false, size = '32' }) => (
   <div className={`flex items-center${centered ? 'justify-center' : ''}`}>
      {icons.map((icon, index) => (
         <Icon key={index} src={icon.src} altText={icon.altText} size={size} />
      ))}
   </div>
);

export default IconBar;
