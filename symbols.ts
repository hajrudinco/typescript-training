namespace Symbols {
    const getClassNameSymbol: symbol = Symbol();

    class C {
        [getClassNameSymbol](): string {
            return "C";
        }
    }

    let c: C = new C();

    let className: string = (<any>c)[getClassNameSymbol]();

    console.log(className);
}
