import { IoSearch } from 'react-icons/io5';
import { SearchContainer } from './styles';

interface SearchInputProps {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput({ placeholder, onChange }: SearchInputProps ) {        
    return (
        <SearchContainer>
            <input type="text" placeholder={placeholder} onChange={onChange} />
            <span><IoSearch /></span>
        </SearchContainer>
    );
};