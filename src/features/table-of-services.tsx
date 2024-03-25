import Chap from 'src/components/ui/chap'

import { services } from 'src/config/table-of-services'

export default function TableOfServices() {
  return (
    <table className=" text-gray-60 bg-transparent w-full hidden sm:table table-fixed select-none">
      <thead className=" bg-black-6 text-white text-base md:text-xl font-semibold">
        <tr>
          <th className="border border-black-15 p-4 md:p-7 rounded-lg">Features</th>
          <th className="border border-black-15 p-4 md:p-7">Basic</th>
          <th className="border border-black-15 p-4 md:p-7">
            <span> Standard</span>
            <Chap className="bg-red-45 rounded-md text-white text-xs font-normal ml-1">
              Popular
            </Chap>
          </th>
          <th className="border border-black-15 p-4 md:p-7">Premium</th>
        </tr>
      </thead>
      <tbody className=" text-sm md:text-lg font-medium">
        {services.features.map((feature, index) => (
          <tr key={index}>
            <td className="border border-black-15 p-4 md:p-7">{feature}</td>
            <td className="border border-black-15 p-4 md:p-7">
              {services.basic[index]}
            </td>
            <td className="border border-black-15 p-4 md:p-7">
              {services.standard[index]}
            </td>
            <td className="border border-black-15 p-4 md:p-7">
              {services.premium[index]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
