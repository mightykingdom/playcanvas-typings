declare namespace pc {

    class ScopeSpace {
        name: string;
        variables: {
            [name: string]: pc.ScopeId
        };
        spaces: {
            [name: string]: pc.ScopeSpace
        };

        resolve(name: string): pc.ScopeId;
        getSubSpace(name: string): pc.ScopeSpace;
    }
}
