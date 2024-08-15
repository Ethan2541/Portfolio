'use client'
import { Typography, useTheme } from '@mui/material';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  const theme = useTheme();
  return (
    <div>
      <Typography variant="h1" color={theme.palette.primary.main}>{t('title')}</Typography>
    </div>
  );
}