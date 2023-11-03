declare function Choose(props: { children?: React.ReactNode }): any;
declare function When(props: { children?: React.ReactNode; condition: any; }): any;
declare function Otherwise(props: { children?: React.ReactNode }): any;
declare function If(props: { children?: React.ReactNode; condition: any; }): any;
declare function For<T>(props: { children?: React.ReactNode; each: string; of: Iterable<T>; index?: string; }): any;
declare function With(props: { children?: React.ReactNode; [id: string]: any; }): any;
