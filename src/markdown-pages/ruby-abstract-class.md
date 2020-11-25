---
path: "/blog/ruby-abstract-class"
title: "Ruby Abstract Classes"
date: "2020-11-25"
featuredImage: "../images/ruby-abstract-class/main.jpg"
tags: ["ruby", "programming"]
---

### What is an Abstract Class?

An abstract class is a class that defines the **signature** for some behavior (method), but leaves the **implementation** of that behavior up to a subclass. Note that abstract classes can have a mix of abstract methods and non abstract methods (the class provides an impementation).

For example,

    # This is the abstract class. It is abstract because it
    # defines a signature for a method(s), but provides no implementation.
    class Soldier
        def salute(target)

        end
    end

    class BritishSoldier < Soldier
        # Here is one implementation of the abstract salute method.
        def salute(target)
            puts "face towards ${target} and raise fingers to forehead with palm facing outwards"
        end
    end

    class AmericanSoldier < Soldier
        # Here is another implementation of the absract salute method.
        def salute
            puts "face towards ${target} and raise fingers to forehead with palm facing downwards"
        end
    end

#### British Salute

![British military salute](../images/ruby-abstract-class/british_salute.jpg "British military salute")

#### American Salute

![American military salute](../images/ruby-abstract-class/american_salute.jpg "American military salute")

#### Abstract classes in Java vs Ruby

In a statically typed language, such as Java, there is an **abstract** keyword that is used to denote abstract classes and methods.

For example,

    public abstract class Soldier {
        // declare fields
        // declare nonabstract methods
        abstract void salute(String target);
    }

Ruby abstract classes are different. **There is no built in way to explicitly declare classes/methods as abstract.** There is however, a way we can signal to our users that a specific method on a class is abstract and an impementation of it must be provided in the subclass.

In our example above, if a subclass of the Soldier class is created and an implementation of the salute method is not provided, when we go to use the salute method, it will be effectless.

    class SoldierWithNoSalute < Soldier
        # We do not provide an implementation of the salute method
        # so the one in the Soldier super class is used.
    end

    soldier_without_salute = SoldierWithNoSalute.new

    # This will do nothing and will not raise an exception or notify us 
    # in any way that the salute method is not implemented in the Soldier class
    soldier_without_salute.salute('flag')

#### "Faking" the abstract keyword in Ruby

To prevent someone from subclassing Soldier, not providing an implementation of the salute method, and then getting unexpected behavior, we can change the Soldier salute method to raise an exception.

    class Soldier
        def salute(target)
            raise NotImplementedError.new 'The Soldier#salute method is abstract, an implementation of it must be provided in the subclass'
        end
    end

Now if someone forgets to provide an implementation of the salute method in a subclass they will be made aware of it immediately.


#### Conclusion

Hopefully now you can see how we can get some of the behavior of Java's abstract classes in Ruby and how we can better implement our Ruby abstract classes in order to give users of our api warnings about methods that they must implement in their subclasses.

If you'd like to read more about abstract classes in Ruby and how you can create an AbstractInterface module, then check out this great <a class="text-blue-500 no-underline- hover:underline" href="https://metabates.com/2011/02/07/building-interfaces-and-abstract-classes-in-ruby/">post</a> by Mark Bates.

Also thanks to <a class="text-blue-500 no-underline- hover:underline" href="https://www.reddit.com/user/GeorgeFranklyMathnet">GeorgeFranklyMathnet</a> for informing me about the ```NotImplementedError```, and prompting me to use clearer wording in some places.

As always, thanks for reading and feel free to connect with me on Twitter @connerjensen780