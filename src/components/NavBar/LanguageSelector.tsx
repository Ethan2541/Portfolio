import React, { useState, MouseEvent } from 'react';
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FlagIcon } from 'react-flag-kit';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useTransition } from 'react';
import {useRouter, usePathname} from '@/navigation';
import { useLocale } from 'next-intl';


export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const locale = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(locale);
  

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    startTransition(() => {
      router.replace(
        {
          pathname,
        },
        {locale: language as "en" | "fr" | undefined}
      );
    });
  };

  // Determine flag code based on selected language
  const getFlagCode = (language: string) => {
    switch (language) {
      case 'fr': return 'FR';
      case 'es': return 'ES';
      case 'en': return 'US';
      default: return 'US';
    }
  }

  return (
    <div >
          <IconButton aria-label="Language" onClick={handleMenuOpen} style={{ color: 'white' }}>
            <FlagIcon code={getFlagCode(selectedLanguage)} style={{ width: '24px', height: '16px', marginRight: '8px' }} />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleLanguageChange('en')}>
              <FlagIcon code="US" style={{ width: '24px', height: '16px', marginRight: '8px' }} /> English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange('fr')}>
              <FlagIcon code="FR" style={{ width: '24px', height: '16px', marginRight: '8px' }} /> Français
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange('es')}>
              <FlagIcon code="ES" style={{ width: '24px', height: '16px', marginRight: '8px' }} /> Español
            </MenuItem>
            {/* Add more languages as needed */}
          </Menu>
    </div>
  );
}
