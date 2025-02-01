'use client';
import Image from 'next/image';
import { createColumnHelper } from '@tanstack/react-table';
import DataTable from '../components/table';
import { skills, skillsForTable } from '../data.js';
// import { camelToTitle,  makeKey } from '../utils.js';

const generateStars = (rating) => { // todo: move to utils
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 === 1;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Image key={`full-${i}`} src='/star-fill.svg' alt='Star' width={16} height={16} />
    );
  }

  if (halfStar) {
    stars.push(
      <Image key='half' src='/star-half-fill.svg' alt='Half Star' width={8} height={16} />
    );
  }

  return stars;
};

const generateYearIcon = (years) => { // todo: move to utils
  return (
    <div className='flex row'>
      <Image
        src={`/yrs-${years}.svg`}
        alt='number of years icon'
        width={24}
        height={24}
        className='mr-2'
      />
      <span className='text-teal-400'>years</span>
    </div>
  );
};

// todo: replace h-[32px] and h-[16px]
// const SkillCard = (skill) => {
//     const { name, icon, rating, years, haveUsedProfessionally, haveUsedForFun } = skill;
//     return (
//         <div key={makeKey(name)} className='rounded-lg p-4 shadow-md'>
//             <div className='flex items-center mb-4'>
//                 {icon && (
//                     <div className='relative flex justify-center mr-2 h-[32px] w-full min-w-[32px]'>
//                         <Image src={icon} alt={name} fill contain='true' />
//                     </div>
//                 )}
//                 <h3>{name}</h3>
//             </div>
//             <div className='relative flex justify-center mr-2 h-[32px] w-full'>
//                 <div className='flex row'>{generateStars(rating)}</div>
//                 <div className='flex row'>{generateYearIcon(years)}</div>
//                 {haveUsedProfessionally && (
//                     <Image src='/chair-office.svg' alt={name} width={24} height={24} />
//                 )}
//                 {haveUsedForFun && (
//                     <Image src='chair-comfy.svg' alt={name} width={24} height={24} />
//                 )}
//             </div>
//         </div>
//     );
// };

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor('icon', {
    header: 'Icon',
    cell: (info) => {
      const { name } = info.row.original;
      return (
        <div className='relative flex justify-center mr-2 h-[32px] w-full min-w-[32px]'>
          <Image src={info.getValue()} alt={name} fill contain='true' />
        </div>
      );
    }
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('type', {
    header: 'Type',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('years', {
    header: 'Years',
    cell: (info) => <div className='flex row'>{generateYearIcon(info.getValue())}</div>
  }),
  columnHelper.accessor('rating', {
    header: 'Rating',
    cell: (info) => <div className='flex row'>{generateStars(info.getValue())}</div>
  }),
  columnHelper.accessor('haveUsedProfessionally', {
    header: 'Used Professionally',
    cell: (info) =>
      info.getValue() ? (
        <Image src='/chair-office.svg' alt='Office chair' width={24} height={24} />
      ) : (
        <></>
      )
  }),
  columnHelper.accessor('haveUsedForFun', {
    header: 'Used for Fun',
    cell: (info) =>
      info.getValue() ? (
        <Image src='chair-comfy.svg' alt='Comfy chair' width={24} height={24} />
      ) : (
        <></>
      )
  })
];

const Skills = () => {
  console.log('bb ~ skills:', skills);

  return (
    <>
      <h1>Skills</h1>
      <DataTable columns={columns} data={skillsForTable} />
      {/* <div>
                {Object.keys(skills).map((category) => {
                    const catSkills = skills[category];
                    return (
                        <div>
                            <h2>{camelToTitle(category)}</h2>
                            <div key={category} className='flex flex-wrap -mx-2'>
                                {catSkills.map((skill) => {
                                    return <SkillCard {...skill} />;
                                })}
                            </div>
                        </div>
                    );
                })}
            </div> */}
    </>
  );
};

export default Skills;
