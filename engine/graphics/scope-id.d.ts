declare namespace pc {
    class ScopeId {
        name: string;
        value: any;
        versionObject: pc.VersionedObject;
        getValue(): any;
        setValue(value: any): void;
    }
}
