import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    baseView: {
      display: 'flex',
      paddingTop: '12px',
      ':global': {
        'ant-legacy-form-item .ant-legacy-form-item-control-wrapper': {
          width: '100%',
        },
      },
      left: { minWidth: '224px', maxWidth: '448px' },
      right: {
        flex: '1',
        paddingLeft: '104px',
        avatar_title: {
          height: '22px',
          marginBottom: '8px',
          color: token.headingColor,
          fontSize: token.fontSizeBase,
          lineHeight: '22px',
        },
        avatar: {
          width: '144px',
          height: '144px',
          marginBottom: '12px',
          overflow: 'hidden',
          img: { width: '100%' },
        },
        button_view: {
          width: '144px',
          textAlign: 'center',
        },
      },
    },
    area_code: {
      width: '72px',
    },
    phone_number: {
      width: '214px',
    },
    [`@mediascreen and (max-width: token.screen-xl)`]: {
      baseView: {
        flexDirection: 'column-reverse',
        right: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '448px',
          padding: '20px',
          avatar_title: { display: 'none' },
        },
      },
    },
  };
});

export default useStyles;
