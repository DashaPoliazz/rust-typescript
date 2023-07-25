fn main() {
    // variables
    let foo = 5; // -> readonly
    let mut bar = 3; // -> mutable

    // shadowing
    let bazz = 5;
    let bazz = bazz + 2;

    println!("{}", bazz);

    // Class and methods
    struct Foo {
        property: usize,
        pub property_pub: usize,
    }

    impl Foo {
        // Static methods
        fn this_static() {
            println!("This is a static method");
        }

        pub fn this_static_pub() {
            println!("This is a public static method");
        }

        // Instance methods
        fn this(&self) {
            println!("This is a non-mutable instance method");
        }

        fn this_mut(&mut self) {
            println!("This is a mutable instance method");
        }
    }

    // Mutations
}
