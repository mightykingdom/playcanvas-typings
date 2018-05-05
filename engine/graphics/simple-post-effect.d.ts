declare namespace pc {
    function drawQuadWithShader(
        device: pc.GraphicsDevice,
        target: pc.RenderTarget,
        shader: pc.Shader,
        rect: pc.Vec4,
        scissorRect: pc.Vec4,
        useBlend: boolean
    ): void;

    function destroyPostEffectQuad(): void;
}
