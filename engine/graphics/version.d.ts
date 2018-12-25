declare namespace pc {
    class Version {
        globalId: number;
        revision: number;

        equals(other: pc.Version): boolean;
        notequals(other: pc.Version): boolean;
        copy(other: pc.Version): void;
        reset(other: pc.Version): void;
    }
}
