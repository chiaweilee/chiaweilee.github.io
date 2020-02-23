import md5 from 'blueimp-md5';

export default (str: string) => md5(str).substr(11, 20);
