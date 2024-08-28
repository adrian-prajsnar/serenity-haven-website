import { getCountries } from '@/app/_lib/data-service';

type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
};

export default async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps) {
  const countries = await getCountries();
  const flag: string =
    countries.find(country => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map(c => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
