import Icon from './Icon';

const IconBar = ({ icons, centered = false, size = '32', wrap=false }) => (
   <div className={`flex items-center${centered ? ' justify-center' : ''}${wrap ? ' flex-wrap gap-2' : ''}`}>
      {icons.map((icon, index) => (
         <Icon key={index} src={icon.src} altText={icon.altText} size={size} />
      ))}
   </div>
);

export default IconBar;
