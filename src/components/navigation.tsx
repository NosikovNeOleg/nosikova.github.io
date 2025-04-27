import { NavigationMenu } from "radix-ui";

export default () => (
  <NavigationMenu.Root className="NavigationMenuRoot">
    <NavigationMenu.List className="NavigationMenuList">
      <NavigationMenu.Item>
        <NavigationMenu.Link href="#" className="NavigationMenuLink">
          HOME
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Link href="#portfolio" className="NavigationMenuLink">
          PORTFOLIO
        </NavigationMenu.Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Link href="#contact" className="NavigationMenuLink" >
          CONTACT
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);
