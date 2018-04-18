declare namespace pc {
    class ForwardRenderer {
        updateCameraFrustum(camera: pc.CameraComponent): void;
        renderComposition(comps: pc.LayerComposition): void;
    }
}