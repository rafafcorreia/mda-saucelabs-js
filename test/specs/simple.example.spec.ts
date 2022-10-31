describe('Testando Carrinho', () => {
    beforeEach(async () => {
        const productTitle = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.widget.TextView'

        await $(productTitle).waitForDisplayed();
    });

    it('Carrinho vazio', async () => {
        const mochilaTitulo = '//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]/android.widget.TextView[1]'

        expect(await $(mochilaTitulo).getText()).toEqual('Sauce Lab Back Packs');

        const mochilaPreco = '//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup[1]/android.widget.TextView[2]'

        expect(await $(mochilaPreco).getText()).toEqual('$ 29.99');
        
        const carrinho = '//android.widget.ImageView[@content-desc="Displays number of items in your cart"]'
        await $(carrinho).click()

        const carrinhoTitulo = '//android.widget.FrameLayout[@content-desc="Container for fragments"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'

        expect(await $(carrinhoTitulo).getText()).toEqual('No Items')
    });
});