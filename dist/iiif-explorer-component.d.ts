// iiif-explorer-component v1.0.1 https://github.com/viewdir/iiif-explorer-component#readme
declare namespace IIIFComponents {
    class ExplorerComponent extends _Components.BaseComponent {
        options: IExplorerComponentOptions;
        private _$view;
        private _current;
        private _parents;
        constructor(options: IExplorerComponentOptions);
        protected _init(): boolean;
        protected _draw(): void;
        protected _sortCollectionsFirst(a: Manifold.ITreeNode, b: Manifold.ITreeNode): number;
        gotoBreadcrumb(node: Manifold.ITreeNode): void;
        protected _switchToFolder(node: Manifold.ITreeNode): void;
        openFolder(node: Manifold.ITreeNode): void;
        protected _followWithin(json: any, callback: (n: any) => any): any;
        databind(): void;
        protected _getDefaultOptions(): IExplorerComponentOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ExplorerComponent {
    class Events {
        static TEST: string;
        static EXPLORER_NODE_SELECTED: string;
    }
}

declare namespace IIIFComponents {
    interface IExplorerComponentOptions extends _Components.IBaseComponentOptions {
        helper: Manifold.IHelper;
        topRangeIndex: number;
        treeSortType: Manifold.TreeSortType;
    }
}
